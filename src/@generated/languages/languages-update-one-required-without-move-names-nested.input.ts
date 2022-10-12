import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_namesInput } from './languages-create-without-move-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_namesInput } from './languages-create-or-connect-without-move-names.input';
import { languagesUpsertWithoutMove_namesInput } from './languages-upsert-without-move-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutMove_namesInput } from './languages-update-without-move-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutMove_namesNestedInput {

    @Field(() => languagesCreateWithoutMove_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_namesInput)
    create?: languagesCreateWithoutMove_namesInput;

    @Field(() => languagesCreateOrConnectWithoutMove_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_namesInput;

    @Field(() => languagesUpsertWithoutMove_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutMove_namesInput)
    upsert?: languagesUpsertWithoutMove_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutMove_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutMove_namesInput)
    update?: languagesUpdateWithoutMove_namesInput;
}
