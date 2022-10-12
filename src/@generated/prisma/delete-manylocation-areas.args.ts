import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasWhereInput } from '../location-areas/location-areas-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManylocationAreasArgs {

    @Field(() => location_areasWhereInput, {nullable:true})
    @Type(() => location_areasWhereInput)
    where?: location_areasWhereInput;
}
