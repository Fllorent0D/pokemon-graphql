import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { locationsCreateInput } from './locations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelocationsArgs {

    @Field(() => locationsCreateInput, {nullable:false})
    @Type(() => locationsCreateInput)
    data!: locationsCreateInput;
}
