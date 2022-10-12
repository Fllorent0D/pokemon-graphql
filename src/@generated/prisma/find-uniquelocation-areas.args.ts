import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasWhereUniqueInput } from '../location-areas/location-areas-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquelocationAreasArgs {

    @Field(() => location_areasWhereUniqueInput, {nullable:false})
    @Type(() => location_areasWhereUniqueInput)
    where!: location_areasWhereUniqueInput;
}
