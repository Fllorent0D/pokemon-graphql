import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasUpdateWithoutLocation_area_proseInput } from './location-areas-update-without-location-area-prose.input';
import { Type } from 'class-transformer';
import { location_areasCreateWithoutLocation_area_proseInput } from './location-areas-create-without-location-area-prose.input';

@InputType()
export class location_areasUpsertWithoutLocation_area_proseInput {

    @Field(() => location_areasUpdateWithoutLocation_area_proseInput, {nullable:false})
    @Type(() => location_areasUpdateWithoutLocation_area_proseInput)
    update!: location_areasUpdateWithoutLocation_area_proseInput;

    @Field(() => location_areasCreateWithoutLocation_area_proseInput, {nullable:false})
    @Type(() => location_areasCreateWithoutLocation_area_proseInput)
    create!: location_areasCreateWithoutLocation_area_proseInput;
}
