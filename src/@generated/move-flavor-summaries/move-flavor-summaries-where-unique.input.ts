import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesMove_idLocal_language_idCompoundUniqueInput } from './move-flavor-summaries-move-id-local-language-id-compound-unique.input';

@InputType()
export class move_flavor_summariesWhereUniqueInput {

    @Field(() => move_flavor_summariesMove_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_id_local_language_id?: move_flavor_summariesMove_idLocal_language_idCompoundUniqueInput;
}
