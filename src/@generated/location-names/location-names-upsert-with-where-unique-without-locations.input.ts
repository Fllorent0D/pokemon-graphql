import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';
import { Type } from 'class-transformer';
import { location_namesUpdateWithoutLocationsInput } from './location-names-update-without-locations.input';
import { location_namesCreateWithoutLocationsInput } from './location-names-create-without-locations.input';

@InputType()
export class location_namesUpsertWithWhereUniqueWithoutLocationsInput {

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;

    @Field(() => location_namesUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => location_namesUpdateWithoutLocationsInput)
    update!: location_namesUpdateWithoutLocationsInput;

    @Field(() => location_namesCreateWithoutLocationsInput, {nullable:false})
    @Type(() => location_namesCreateWithoutLocationsInput)
    create!: location_namesCreateWithoutLocationsInput;
}
