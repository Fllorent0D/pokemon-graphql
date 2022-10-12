import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_encounter_ratesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';
import { Type } from 'class-transformer';
import { location_area_encounter_ratesUpdateManyMutationInput } from './location-area-encounter-rates-update-many-mutation.input';

@InputType()
export class location_area_encounter_ratesUpdateManyWithWhereWithoutEncounter_methodsInput {

    @Field(() => location_area_encounter_ratesScalarWhereInput, {nullable:false})
    @Type(() => location_area_encounter_ratesScalarWhereInput)
    where!: location_area_encounter_ratesScalarWhereInput;

    @Field(() => location_area_encounter_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => location_area_encounter_ratesUpdateManyMutationInput)
    data!: location_area_encounter_ratesUpdateManyMutationInput;
}
