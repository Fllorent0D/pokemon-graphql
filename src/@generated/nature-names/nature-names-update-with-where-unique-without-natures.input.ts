import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';
import { Type } from 'class-transformer';
import { nature_namesUpdateWithoutNaturesInput } from './nature-names-update-without-natures.input';

@InputType()
export class nature_namesUpdateWithWhereUniqueWithoutNaturesInput {

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;

    @Field(() => nature_namesUpdateWithoutNaturesInput, {nullable:false})
    @Type(() => nature_namesUpdateWithoutNaturesInput)
    data!: nature_namesUpdateWithoutNaturesInput;
}
