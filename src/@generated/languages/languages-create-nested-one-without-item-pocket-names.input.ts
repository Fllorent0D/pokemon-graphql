import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_pocket_namesInput } from './languages-create-without-item-pocket-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_pocket_namesInput } from './languages-create-or-connect-without-item-pocket-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutItem_pocket_namesInput {

    @Field(() => languagesCreateWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_pocket_namesInput)
    create?: languagesCreateWithoutItem_pocket_namesInput;

    @Field(() => languagesCreateOrConnectWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_pocket_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_pocket_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
