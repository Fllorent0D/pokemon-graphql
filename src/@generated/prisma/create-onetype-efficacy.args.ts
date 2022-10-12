import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_efficacyCreateInput } from '../type-efficacy/type-efficacy-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnetypeEfficacyArgs {

    @Field(() => type_efficacyCreateInput, {nullable:false})
    @Type(() => type_efficacyCreateInput)
    data!: type_efficacyCreateInput;
}
