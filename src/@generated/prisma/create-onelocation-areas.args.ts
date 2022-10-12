import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasCreateInput } from '../location-areas/location-areas-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelocationAreasArgs {

    @Field(() => location_areasCreateInput, {nullable:false})
    @Type(() => location_areasCreateInput)
    data!: location_areasCreateInput;
}
