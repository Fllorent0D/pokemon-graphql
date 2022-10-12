import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutAbility_proseInput } from './languages-create-without-ability-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutAbility_proseInput } from './languages-create-or-connect-without-ability-prose.input';
import { languagesUpsertWithoutAbility_proseInput } from './languages-upsert-without-ability-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutAbility_proseInput } from './languages-update-without-ability-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutAbility_proseNestedInput {

    @Field(() => languagesCreateWithoutAbility_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutAbility_proseInput)
    create?: languagesCreateWithoutAbility_proseInput;

    @Field(() => languagesCreateOrConnectWithoutAbility_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutAbility_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutAbility_proseInput;

    @Field(() => languagesUpsertWithoutAbility_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutAbility_proseInput)
    upsert?: languagesUpsertWithoutAbility_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutAbility_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutAbility_proseInput)
    update?: languagesUpdateWithoutAbility_proseInput;
}
