import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_namesCreateInput } from '../nature-names/nature-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnenatureNamesArgs {

    @Field(() => nature_namesCreateInput, {nullable:false})
    @Type(() => nature_namesCreateInput)
    data!: nature_namesCreateInput;
}
