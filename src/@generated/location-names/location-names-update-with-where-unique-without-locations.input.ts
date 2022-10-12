import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_namesWhereUniqueInput } from './location-names-where-unique.input';
import { Type } from 'class-transformer';
import { location_namesUpdateWithoutLocationsInput } from './location-names-update-without-locations.input';

@InputType()
export class location_namesUpdateWithWhereUniqueWithoutLocationsInput {

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;

    @Field(() => location_namesUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => location_namesUpdateWithoutLocationsInput)
    data!: location_namesUpdateWithoutLocationsInput;
}
