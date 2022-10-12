import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesCreateInput } from '../location-names/location-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelocationNamesArgs {

    @Field(() => location_namesCreateInput, {nullable:false})
    @Type(() => location_namesCreateInput)
    data!: location_namesCreateInput;
}
