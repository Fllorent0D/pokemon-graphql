import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';
import { Type } from 'class-transformer';
import { nature_namesUpdateWithoutNaturesInput } from './nature-names-update-without-natures.input';
import { nature_namesCreateWithoutNaturesInput } from './nature-names-create-without-natures.input';

@InputType()
export class nature_namesUpsertWithWhereUniqueWithoutNaturesInput {

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;

    @Field(() => nature_namesUpdateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_namesUpdateWithoutNaturesInput)
    update!: nature_namesUpdateWithoutNaturesInput;

    @Field(() => nature_namesCreateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_namesCreateWithoutNaturesInput)
    create!: nature_namesCreateWithoutNaturesInput;
}
