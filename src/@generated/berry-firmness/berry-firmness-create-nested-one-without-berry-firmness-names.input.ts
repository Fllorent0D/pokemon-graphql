import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessCreateWithoutBerry_firmness_namesInput } from './berry-firmness-create-without-berry-firmness-names.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput } from './berry-firmness-create-or-connect-without-berry-firmness-names.input';
import { berry_firmnessWhereUniqueInput } from './berry-firmness-where-unique.input';

@InputType()
export class berry_firmnessCreateNestedOneWithoutBerry_firmness_namesInput {

    @Field(() => berry_firmnessCreateWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => berry_firmnessCreateWithoutBerry_firmness_namesInput)
    create?: berry_firmnessCreateWithoutBerry_firmness_namesInput;

    @Field(() => berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput, {nullable:true})
    @Type(() => berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput)
    connectOrCreate?: berry_firmnessCreateOrConnectWithoutBerry_firmness_namesInput;

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:true})
    @Type(() => berry_firmnessWhereUniqueInput)
    connect?: berry_firmnessWhereUniqueInput;
}
