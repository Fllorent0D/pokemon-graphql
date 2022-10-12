import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';
import { Type } from 'class-transformer';
import { nature_namesCreateWithoutNaturesInput } from './nature-names-create-without-natures.input';

@InputType()
export class nature_namesCreateOrConnectWithoutNaturesInput {

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;

    @Field(() => nature_namesCreateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_namesCreateWithoutNaturesInput)
    create!: nature_namesCreateWithoutNaturesInput;
}
