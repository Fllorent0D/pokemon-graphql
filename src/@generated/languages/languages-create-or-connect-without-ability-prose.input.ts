import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_proseInput } from './languages-create-without-ability-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutAbility_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutAbility_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_proseInput)
    create!: languagesCreateWithoutAbility_proseInput;
}
