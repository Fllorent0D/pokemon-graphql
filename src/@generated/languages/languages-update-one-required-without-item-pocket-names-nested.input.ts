import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_pocket_namesInput } from './languages-create-without-item-pocket-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_pocket_namesInput } from './languages-create-or-connect-without-item-pocket-names.input';
import { languagesUpsertWithoutItem_pocket_namesInput } from './languages-upsert-without-item-pocket-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutItem_pocket_namesInput } from './languages-update-without-item-pocket-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutItem_pocket_namesNestedInput {

    @Field(() => languagesCreateWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_pocket_namesInput)
    create?: languagesCreateWithoutItem_pocket_namesInput;

    @Field(() => languagesCreateOrConnectWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_pocket_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_pocket_namesInput;

    @Field(() => languagesUpsertWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutItem_pocket_namesInput)
    upsert?: languagesUpsertWithoutItem_pocket_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutItem_pocket_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutItem_pocket_namesInput)
    update?: languagesUpdateWithoutItem_pocket_namesInput;
}
