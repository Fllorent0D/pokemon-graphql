import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessCreateWithoutBerry_firmness_namesInput } from './berry-firmness-create-without-berry-firmness-names.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput } from './berry-firmness-create-or-connect-without-berry-firmness-names.input';
import { berry_firmnessUpsertWithoutBerry_firmness_namesInput } from './berry-firmness-upsert-without-berry-firmness-names.input';
import { berry_firmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { berry_firmnessUpdateWithoutBerry_firmness_namesInput } from './berry-firmness-update-without-berry-firmness-names.input';

@InputType()
export class berry_firmnessUpdateOneRequiredWithoutBerry_firmness_namesNestedInput {

    @Field(() => berry_firmnessCreateWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => berry_firmnessCreateWithoutBerry_firmness_namesInput)
    create?: berry_firmnessCreateWithoutBerry_firmness_namesInput;

    @Field(() => berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput)
    connectOrCreate?: berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput;

    @Field(() => berry_firmnessUpsertWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => berry_firmnessUpsertWithoutBerry_firmness_namesInput)
    upsert?: berry_firmnessUpsertWithoutBerry_firmness_namesInput;

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:true})
    @Type(() => berry_firmnessWhereUniqueInput)
    connect?: berry_firmnessWhereUniqueInput;

    @Field(() => berry_firmnessUpdateWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => berry_firmnessUpdateWithoutBerry_firmness_namesInput)
    update?: berry_firmnessUpdateWithoutBerry_firmness_namesInput;
}
