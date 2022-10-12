import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyWhereUniqueInput } from '../type-efficacy/type-efficacy-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquetypeEfficacyArgs {

    @Field(() => type_efficacyWhereUniqueInput, {nullable:false})
    @Type(() => type_efficacyWhereUniqueInput)
    where!: type_efficacyWhereUniqueInput;
}
