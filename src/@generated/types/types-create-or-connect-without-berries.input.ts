import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutBerriesInput } from './types-create-without-berries.input';

@InputType()
export class typesCreateOrConnectWithoutBerriesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutBerriesInput, {nullable:false})
    @Type(() => typesCreateWithoutBerriesInput)
    create!: typesCreateWithoutBerriesInput;
}
