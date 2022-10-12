import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesUpdateWithoutEncounter_methodsInput } from './location-area-encounter-rates-update-without-encounter-methods.input';
import { location_area_encounter_ratesCreateWithoutEncounter_methodsInput } from './location-area-encounter-rates-create-without-encounter-methods.input';

@InputType()
export class location_area_encounter_ratesUpsertWithWhereUniqueWithoutEncounter_methodsInput {

    @Field(() => location_area_encounter_ratesWhereUniqueInput, {nullable:false})
    @Type(() => location_area_encounter_ratesWhereUniqueInput)
    where!: location_area_encounter_ratesWhereUniqueInput;

    @Field(() => location_area_encounter_ratesUpdateWithoutEncounter_methodsInput, {nullable:false})
    @Type(() => location_area_encounter_ratesUpdateWithoutEncounter_methodsInput)
    update!: location_area_encounter_ratesUpdateWithoutEncounter_methodsInput;

    @Field(() => location_area_encounter_ratesCreateWithoutEncounter_methodsInput, {nullable:false})
    @Type(() => location_area_encounter_ratesCreateWithoutEncounter_methodsInput)
    create!: location_area_encounter_ratesCreateWithoutEncounter_methodsInput;
}
