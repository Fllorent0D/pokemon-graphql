import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { egg_group_proseScalarWhereInput } from './egg-group-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { egg_group_proseUpdateManyMutationInput } from './egg-group-prose-update-many-mutation.input';

@InputType()
export class egg_group_proseUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => egg_group_proseScalarWhereInput, {nullable:false})
    @Type(() => egg_group_proseScalarWhereInput)
    where!: egg_group_proseScalarWhereInput;

    @Field(() => egg_group_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => egg_group_proseUpdateManyMutationInput)
    data!: egg_group_proseUpdateManyMutationInput;
}
