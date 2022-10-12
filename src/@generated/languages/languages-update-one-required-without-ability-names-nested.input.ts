import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutAbility_namesInput } from './languages-create-without-ability-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutAbility_namesInput } from './languages-create-or-connect-without-ability-names.input';
import { languagesUpsertWithoutAbility_namesInput } from './languages-upsert-without-ability-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutAbility_namesInput } from './languages-update-without-ability-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutAbility_namesNestedInput {

    @Field(() => languagesCreateWithoutAbility_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutAbility_namesInput)
    create?: languagesCreateWithoutAbility_namesInput;

    @Field(() => languagesCreateOrConnectWithoutAbility_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutAbility_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutAbility_namesInput;

    @Field(() => languagesUpsertWithoutAbility_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutAbility_namesInput)
    upsert?: languagesUpsertWithoutAbility_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutAbility_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutAbility_namesInput)
    update?: languagesUpdateWithoutAbility_namesInput;
}
