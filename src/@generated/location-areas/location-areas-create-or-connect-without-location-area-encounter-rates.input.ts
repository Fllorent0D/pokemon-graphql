import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { location_areasCreateWithoutLocation_area_encounter_ratesInput } from './location-areas-create-without-location-area-encounter-rates.input';

@InputType()
export class location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput {

    @Field(() => location_areasWhereUniqueInput, {nullable:false})
    @Type(() => location_areasWhereUniqueInput)
    where!: location_areasWhereUniqueInput;

    @Field(() => location_areasCreateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => location_areasCreateWithoutLocation_area_encounter_ratesInput)
    create!: location_areasCreateWithoutLocation_area_encounter_ratesInput;
}
