import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessCreateWithoutBerriesInput } from './berry-firmness-create-without-berries.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateOrConnectWithoutBerriesInput } from './berry-firmness-create-or-connect-without-berries.input';
import { berry_firmnessWhereUniqueInput } from './berry-firmness-where-unique.input';

@InputType()
export class berry_firmnessCreateNestedOneWithoutBerriesInput {

    @Field(() => berry_firmnessCreateWithoutBerriesInput, {nullable:true})
    @Type(() => berry_firmnessCreateWithoutBerriesInput)
    create?: berry_firmnessCreateWithoutBerriesInput;

    @Field(() => berry_firmnessCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => berry_firmnessCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: berry_firmnessCreateOrConnectWithoutBerriesInput;

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:true})
    @Type(() => berry_firmnessWhereUniqueInput)
    connect?: berry_firmnessWhereUniqueInput;
}
