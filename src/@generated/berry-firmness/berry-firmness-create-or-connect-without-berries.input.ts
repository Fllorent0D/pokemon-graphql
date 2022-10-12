import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmnessCreateWithoutBerriesInput } from './berry-firmness-create-without-berries.input';

@InputType()
export class berry_firmnessCreateOrConnectWithoutBerriesInput {

    @Field(() => berry_firmnessWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmnessWhereUniqueInput)
    where!: berry_firmnessWhereUniqueInput;

    @Field(() => berry_firmnessCreateWithoutBerriesInput, {nullable:false})
    @Type(() => berry_firmnessCreateWithoutBerriesInput)
    create!: berry_firmnessCreateWithoutBerriesInput;
}
