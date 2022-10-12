import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_flavorsBerry_idContest_type_idCompoundUniqueInput } from './berry-flavors-berry-id-contest-type-id-compound-unique.input';

@InputType()
export class berry_flavorsWhereUniqueInput {

    @Field(() => berry_flavorsBerry_idContest_type_idCompoundUniqueInput, {nullable:true})
    berry_id_contest_type_id?: berry_flavorsBerry_idContest_type_idCompoundUniqueInput;
}
