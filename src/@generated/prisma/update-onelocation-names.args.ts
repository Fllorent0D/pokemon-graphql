import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesUpdateInput } from '../location-names/location-names-update.input';
import { Type } from 'class-transformer';
import { location_namesWhereUniqueInput } from '../location-names/location-names-where-unique.input';

@ArgsType()
export class UpdateOnelocationNamesArgs {

    @Field(() => location_namesUpdateInput, {nullable:false})
    @Type(() => location_namesUpdateInput)
    data!: location_namesUpdateInput;

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;
}
