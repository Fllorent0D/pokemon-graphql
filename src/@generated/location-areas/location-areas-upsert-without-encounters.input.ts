import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasUpdateWithoutEncountersInput } from './location-areas-update-without-encounters.input';
import { Type } from 'class-transformer';
import { location_areasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';

@InputType()
export class location_areasUpsertWithoutEncountersInput {

    @Field(() => location_areasUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => location_areasUpdateWithoutEncountersInput)
    update!: location_areasUpdateWithoutEncountersInput;

    @Field(() => location_areasCreateWithoutEncountersInput, {nullable:false})
    @Type(() => location_areasCreateWithoutEncountersInput)
    create!: location_areasCreateWithoutEncountersInput;
}
