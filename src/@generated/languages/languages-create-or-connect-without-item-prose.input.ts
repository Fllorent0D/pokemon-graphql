import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_proseInput } from './languages-create-without-item-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_proseInput)
    create!: languagesCreateWithoutItem_proseInput;
}
