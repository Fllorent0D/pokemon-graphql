import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { location_areasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';

@InputType()
export class location_areasCreateOrConnectWithoutEncountersInput {

    @Field(() => location_areasWhereUniqueInput, {nullable:false})
    @Type(() => location_areasWhereUniqueInput)
    where!: location_areasWhereUniqueInput;

    @Field(() => location_areasCreateWithoutEncountersInput, {nullable:false})
    @Type(() => location_areasCreateWithoutEncountersInput)
    create!: location_areasCreateWithoutEncountersInput;
}
