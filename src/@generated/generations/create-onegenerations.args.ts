import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generationsCreateInput } from './generations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegenerationsArgs {

    @Field(() => generationsCreateInput, {nullable:false})
    @Type(() => generationsCreateInput)
    data!: generationsCreateInput;
}
