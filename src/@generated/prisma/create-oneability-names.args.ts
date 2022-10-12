import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesCreateInput } from '../ability-names/ability-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneabilityNamesArgs {

    @Field(() => ability_namesCreateInput, {nullable:false})
    @Type(() => ability_namesCreateInput)
    data!: ability_namesCreateInput;
}
