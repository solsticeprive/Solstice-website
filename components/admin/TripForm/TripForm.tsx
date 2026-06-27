"use client";

import { useState } from "react";
import Button, { LinkButton } from "@/components/admin/Button/Button";
import type { Trip, TripStatus } from "@/lib/admin/types";
import styles from "./TripForm.module.css";

interface TripFormProps {
  trip?: Trip;
  action: (formData: FormData) => void | Promise<void>;
}

const statusOptions: { value: TripStatus; label: string }[] = [
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "sold_out", label: "Sold Out" },
  { value: "archived", label: "Archived" },
];

export default function TripForm({ trip, action }: TripFormProps) {
  const [imagePreview, setImagePreview] = useState(trip?.image ?? "");

  return (
    <form action={action} className={styles.form}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="title">Trip Title</label>
          <input id="title" name="title" type="text" defaultValue={trip?.title} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="tag">Category Tag</label>
          <input
            id="tag"
            name="tag"
            type="text"
            defaultValue={trip?.tag}
            placeholder="e.g. Couples Escapes"
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="location">Location</label>
          <input id="location" name="location" type="text" defaultValue={trip?.location} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue={trip?.status ?? "draft"}>
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="startDate">Start Date</label>
          <input id="startDate" name="startDate" type="date" defaultValue={trip?.startDate} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="endDate">End Date</label>
          <input id="endDate" name="endDate" type="date" defaultValue={trip?.endDate} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="capacity">Capacity</label>
          <input id="capacity" name="capacity" type="number" min={1} defaultValue={trip?.capacity} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="price">Price (USD)</label>
          <input id="price" name="price" type="number" min={0} defaultValue={trip?.price} required />
        </div>

        <div className={`${styles.field} ${styles.spanTwo}`}>
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            name="image"
            type="url"
            defaultValue={trip?.image}
            placeholder="https://images.unsplash.com/..."
            onChange={(e) => setImagePreview(e.target.value)}
            required
          />
        </div>

        <div className={`${styles.field} ${styles.spanTwo}`}>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={4} defaultValue={trip?.description} required />
        </div>
      </div>

      {imagePreview && (
        <div className={styles.preview}>
          <span className={styles.previewLabel}>Image Preview</span>
          {/* Admin-supplied URL from an arbitrary domain — can't be known ahead of
              time for next/image's remotePatterns, so a plain img is used here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imagePreview} alt="Trip preview" className={styles.previewImage} />
        </div>
      )}

      <div className={styles.actions}>
        <Button type="submit">{trip ? "Save Changes" : "Create Trip"}</Button>
        <LinkButton href="/admin/trips" variant="secondary">
          Cancel
        </LinkButton>
      </div>
      <p className={styles.note}>
        This form isn&apos;t connected to a live database yet — changes are kept in memory for
        this session.
      </p>
    </form>
  );
}
