import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_namesInput } from './languages-create-without-item-names.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_namesInput)
    create!: languagesCreateWithoutItem_namesInput;
}
