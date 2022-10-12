import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesCreateInput } from '../version-names/version-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneversionNamesArgs {

    @Field(() => version_namesCreateInput, {nullable:false})
    @Type(() => version_namesCreateInput)
    data!: version_namesCreateInput;
}
