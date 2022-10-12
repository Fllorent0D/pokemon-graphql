import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';
import { Type } from 'class-transformer';
import { location_areasCreateOrConnectWithoutEncountersInput } from './location-areas-create-or-connect-without-encounters.input';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';

@InputType()
export class location_areasCreateNestedOneWithoutEncountersInput {

    @Field(() => location_areasCreateWithoutEncountersInput, {nullable:true})
    @Type(() => location_areasCreateWithoutEncountersInput)
    create?: location_areasCreateWithoutEncountersInput;

    @Field(() => location_areasCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => location_areasCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: location_areasCreateOrConnectWithoutEncountersInput;

    @Field(() => location_areasWhereUniqueInput, {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    connect?: location_areasWhereUniqueInput;
}
