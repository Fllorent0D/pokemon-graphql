import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyWhereInput } from '../type-efficacy/type-efficacy-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManytypeEfficacyArgs {

    @Field(() => type_efficacyWhereInput, {nullable:true})
    @Type(() => type_efficacyWhereInput)
    where?: type_efficacyWhereInput;
}
