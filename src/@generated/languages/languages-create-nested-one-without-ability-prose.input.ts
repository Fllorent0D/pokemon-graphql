import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutAbility_proseInput } from './languages-create-without-ability-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutAbility_proseInput } from './languages-create-or-connect-without-ability-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutAbility_proseInput {

    @Field(() => languagesCreateWithoutAbility_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutAbility_proseInput)
    create?: languagesCreateWithoutAbility_proseInput;

    @Field(() => languagesCreateOrConnectWithoutAbility_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutAbility_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutAbility_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
