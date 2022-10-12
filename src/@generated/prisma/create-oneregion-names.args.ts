import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesCreateInput } from '../region-names/region-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneregionNamesArgs {

    @Field(() => region_namesCreateInput, {nullable:false})
    @Type(() => region_namesCreateInput)
    data!: region_namesCreateInput;
}
