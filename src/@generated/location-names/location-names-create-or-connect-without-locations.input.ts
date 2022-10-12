import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';
import { Type } from 'class-transformer';
import { location_namesCreateWithoutLocationsInput } from './location-names-create-without-locations.input';

@InputType()
export class location_namesCreateOrConnectWithoutLocationsInput {

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;

    @Field(() => location_namesCreateWithoutLocationsInput, {nullable:false})
    @Type(() => location_namesCreateWithoutLocationsInput)
    create!: location_namesCreateWithoutLocationsInput;
}
