import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesCreateWithoutLocation_areasInput } from './location-area-encounter-rates-create-without-location-areas.input';

@InputType()
export class location_area_encounter_ratesCreateOrConnectWithoutLocation_areasInput {

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:false})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    where!: location_area_encounter_ratesWhereUniqueInput;

    @Field(() => location_area_encounter_ratesCreateWithoutLocation_areasInput, {nullable:false})
    @Type(() => location_area_encounter_ratesCreateWithoutLocation_areasInput)
    create!: location_area_encounter_ratesCreateWithoutLocation_areasInput;
}
