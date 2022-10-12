import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { regionsCreateInput } from './regions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneregionsArgs {

    @Field(() => regionsCreateInput, {nullable:false})
    @Type(() => regionsCreateInput)
    data!: regionsCreateInput;
}
