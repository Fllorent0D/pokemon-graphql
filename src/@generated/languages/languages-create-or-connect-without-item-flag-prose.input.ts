import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_flag_proseInput } from './languages-create-without-item-flag-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_flag_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_flag_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_flag_proseInput)
    create!: languagesCreateWithoutItem_flag_proseInput;
}
