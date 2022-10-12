import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutEgg_group_proseInput } from './languages-create-without-egg-group-prose.input';

@InputType()
export class languagesCreateOrConnectWithoutEgg_group_proseInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutEgg_group_proseInput, {nullable:false})
    @Type(() => languagesCreateWithoutEgg_group_proseInput)
    create!: languagesCreateWithoutEgg_group_proseInput;
}
