import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutItem_pocket_namesInput } from './languages-create-without-item-pocket-names.input';

@InputType()
export class languagesCreateOrConnectWithoutItem_pocket_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutItem_pocket_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutItem_pocket_namesInput)
    create!: languagesCreateWithoutItem_pocket_namesInput;
}
