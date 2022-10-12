import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutType_namesInput } from './types-create-without-type-names.input';

@InputType()
export class typesCreateOrConnectWithoutType_namesInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutType_namesInput, {nullable:false})
    @Type(() => typesCreateWithoutType_namesInput)
    create!: typesCreateWithoutType_namesInput;
}
