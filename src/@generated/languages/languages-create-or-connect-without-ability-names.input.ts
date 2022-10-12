import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutAbility_namesInput } from './languages-create-without-ability-names.input';

@InputType()
export class languagesCreateOrConnectWithoutAbility_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutAbility_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutAbility_namesInput)
    create!: languagesCreateWithoutAbility_namesInput;
}
