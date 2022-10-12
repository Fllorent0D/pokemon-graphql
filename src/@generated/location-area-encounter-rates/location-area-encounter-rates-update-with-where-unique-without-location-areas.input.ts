import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesUpdateWithoutLocation_areasInput } from './location-area-encounter-rates-update-without-location-areas.input';

@InputType()
export class location_area_encounter_ratesUpdateWithWhereUniqueWithoutLocation_areasInput {

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:false})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    where!: location_area_encounter_ratesWhereUniqueInput;

    @Field(() => location_area_encounter_ratesUpdateWithoutLocation_areasInput, {nullable:false})
    @Type(() => location_area_encounter_ratesUpdateWithoutLocation_areasInput)
    data!: location_area_encounter_ratesUpdateWithoutLocation_areasInput;
}
